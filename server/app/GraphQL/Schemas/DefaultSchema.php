<?php

namespace App\GraphQL\Schemas;

use App\GraphQL\Mutations\CreateUserMutation;
use App\GraphQL\Queries\UserQuery;
use App\GraphQL\Types\UserType;
use Rebing\GraphQL\Support\Contracts\ConfigConvertible;

class DefaultSchema implements ConfigConvertible
{
    public function toConfig(): array
    {
        return [
            'query' => [
                // ExampleQuery::class,
                UserQuery::class
            ],

            'mutation' => [
                // ExampleMutation::class,
               CreateUserMutation::class
            ],

            'types' => [
                // ExampleType::class,
                UserType::class
            ],
        ];
    }
}
