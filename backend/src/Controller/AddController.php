<?php

namespace App\Controller;

use App\Service\Add;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

/**
  * @Route("/api", name="api_")
*/
class AddController extends AbstractController
{
    /**
     * @Route("/upload", name="upload_image")
     */
    public function upload(Request $request, Add $addService)
    {
        $image = $request->files->get('file');
        $email = $request->get('email');    
        $fileName = time().".";
        $fileName .= $image->getClientOriginalExtension();

        $addService->uploadImage($image, $email, $fileName);
        $addService->addImageToDatabase($email, $fileName);
     
        $response = [
            'code' => 1,
            'message' => 'Success!',
            'data' => null,
            'errors' => null
        ]; 

        return new JsonResponse($response,  Response::HTTP_OK, );  
    }

    /**
     * @Route("/add", name="add_text")
     */
    public function add()
    {
        return $this->render('add/index.html.twig', [
            'controller_name' => 'AddController',
        ]);
    }

     /**
     * @Route("/get/id/{email}", name="get_images_ids")
     */
    public function getImages($mail, Add $addService)
    {
        $ids = $addService->getImagesIds($email);

        $response = [
            'code' => 1,
            'message' => 'Success!',
            'data' => $ids,
            'errors' => null
        ]; 

        return new JsonResponse($response,  Response::HTTP_OK, );  
    }

     /**
     * @Route("/get/image/{id}", name="get_image")
     */
    public function getImage($id, Add $addService)
    {
        $imagePath = $addService->getImagePath($id);
        
        return new BinaryFileResponse($imagePath);
    }
}
