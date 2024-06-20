<?php

namespace App\GraphQL\Privacy;

use Illuminate\Support\Facades\Auth;
use Rebing\GraphQL\Support\Privacy;

class UserPrivacy extends Privacy
{
    public function validate(array $queryArgs, $queryContext = null): bool
    {
        return $queryArgs['id'] == Auth::id();
    }
}
