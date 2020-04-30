<?php

namespace App\Controller;

use App\Service\Home;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
  * @Route("/api", name="api_")
*/
class HomeController extends AbstractController
{
     /**
     * @Route("/get/cards", name="get_cards")
     */
    public function getCards(Request $request, Home $homeService)
    {
        $email = $request->get('email');    
        
        $data = $homeService->getCards($email);
     
        $response = [
            'code' => 1,
            'message' => 'Success!',
            'data' => $data,
            'errors' => null
        ]; 

        return new JsonResponse($response,  Response::HTTP_OK, );  
    }
}