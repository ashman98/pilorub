<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductRatings extends Model
{
    use HasFactory;

    public function products(): BelongsTo
    {
        return $this->belongsTo(Products::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class); // Assuming User model is in the 'App\Models' namespace
    }
}
