<?php 
namespace App\Service;

use App\Entity\User;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class Register extends AbstractService 
{
    public function register (
        UserPasswordEncoderInterface $passwordEncoder, string $name, string $surname, string $email, string $password, string $password2 
    ) : bool
    {
        try {
            if (!empty($this->entityManager->getRepository(User::class)->findBy(['email' => $email])))
            {
                throw new \Exception('This email address is reserved!');
            }
            else if ($password != $password2) 
            {
                throw new \Exception('Repeated password is not the same as password!');
            } else if (strlen($name) > 20 || strlen($surname) > 20)
            {
                throw new \Exception('Name and surname ca not have more than 20 characters!')  ;  
            } else if (strlen($name) < 1 || strlen($surname) < 1 || strlen($email) < 1)
            {
                throw new \Exception('All fields are required!');
            }  else if (strlen($password) < 6) {
                throw new \Exception('Password must have 6 characters at least!');
            } else {
                $user = new User();

                $user->setName($name);
                $user->setSurname($surname);
                $user->setEmail($email);

                $user->setPassword(
                    $passwordEncoder->encodePassword(
                        $user,
                        $password
                    )
                );

                $this->entityManager->persist($user);
                $this->entityManager->flush();
            }     
            
            
            return true;
        } catch (\Exception $exception) {
            throw $exception;

            return false;
        }
    }
}