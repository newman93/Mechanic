<?php 
namespace App\Service;

use App\Entity\Defect;

class Home extends AbstractService 
{
    public function getCards($email) {
        $cardsParsed = [];
        $cards = $this->entityManager->getRepository(Defect::class)->getCards($email);

        foreach ($cards as $card) {
            $cardsParsed[] = [
                'id' => $card['id'],
                'image' => $card['image'],
                'title' => $card['title'],
                'description' => $card['description']
            ];
        }

        return $cardsParsed;
    }
}