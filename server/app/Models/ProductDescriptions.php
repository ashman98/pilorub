<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ProductDescriptions extends Model
{
    use HasFactory;

    public function products(): BelongsTo
    {
        return $this->belongsTo(Products::class);
    }

    public function subDescriptions(): HasMany
    {
        return $this->hasMany(ProductSubDescriptions::class);
    }
}
