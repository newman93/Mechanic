<?php

namespace App\Repository;

use App\Entity\Defect;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Defect|null find($id, $lockMode = null, $lockVersion = null)
 * @method Defect|null findOneBy(array $criteria, array $orderBy = null)
 * @method Defect[]    findAll()
 * @method Defect[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DefectRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Defect::class);
    }

    public function getImagesIds($email)
    {
        $query = $this->createQueryBuilder('d');
        return $query
            ->select('d.id')
            ->where('d.title = :null')
            ->andWhere('d.description = :null')
            ->andWhere('d.email = :email')
            ->setParameters(['null' => 'NULL', 'email' => $email])
            ->getQuery()
            ->getResult()
        ;
    }

    public function getCards($email)
    {
        $query = $this->createQueryBuilder('d');
        return $query
            ->select('d.id, d.image, d.title, d.description')
            ->where('d.title != :null')
            ->andWhere('d.description != :null')
            ->andWhere('d.email = :email')
            ->setParameters(['null' => 'NULL', 'email' => $email])
            ->getQuery()
            ->getResult()
        ;
    }
}
