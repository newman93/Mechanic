<?php

namespace App\Service;

use Doctrine\ORM\EntityManagerInterface;

class AbstractService 
{
    public $entityManager;

    public function __construct(EntityManagerInterface $entityManager) 
    {
        $this->entityManager = $entityManager;
    }
}