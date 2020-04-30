<?php 
namespace App\Service;

use App\Entity\Defect;
use App\Entity\User;

class Add extends AbstractService 
{
    public function uploadImage($image, $email, $fileName) : void {
        $uploadDir = "../../images/$email";

        if (!file_exists("../../images/$email")) {
            mkdir("../../images/$email", 0777, true);
        }

        $image->move($uploadDir, $fileName); 
    }
    
    public function addImageToDatabase($email, $fileName) {
        $defect = new Defect();
        
        $defect->setImage("../../images/$email/$fileName");
        $defect->setEmail($email);

        $this->entityManager->persist($defect);
        $this->entityManager->flush();
    }

    public function getImagePath($id) {
        $defect = $this->entityManager->getRepository(Defect::class)->find($id);

        return $defect->getImage();
    }

    public function getImagesIds($email) {
       $ids = $this->entityManager->getRepository(Defect::class)->getImagesIds($email);
       
       return $ids;
    }

    public function addDefect($selectImage, $title, $descritpion) {
        $defect = $this->entityManager->getRepository(Defect::class)->find($selectImage);

        $defect->setTitle($title);
        $defect->setDescription($descritpion);

        $this->entityManager->persist($defect);
        $this->entityManager->flush();

    }
}