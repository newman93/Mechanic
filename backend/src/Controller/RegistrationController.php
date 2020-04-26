<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Service\Register;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

  /**
     * @Route("/api", name="api_")
     */
class RegistrationController extends AbstractController
{
    /**
     * @Route("/register", name="app_register", methods={"POST"})
     */
    public function index(Request $request,UserPasswordEncoderInterface $passwordEncoder, Register $registerService): Response
    {
     
        try {
            $registerService->register(
                $passwordEncoder, $request->get('name'),$request->get('surname'), $request->get('email'), $request->get('password'), $request->get('password2')
            );
            $response = [
                'code' => 1,
                'message' => 'Success!',
                'data' => null,
                'errors' => null
            ]; 

            return new JsonResponse($response, Response::HTTP_OK);
        } catch (\Exception $exception) {       
            $response = [
                'code' => 0,
                'message' => 'Failure!',
                'data' => null,
                'errors' => $exception->getMessage()
            ]; 

            return new JsonResponse($response, Response::HTTP_BAD_REQUEST);   
        }
    }
}
