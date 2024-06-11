<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Products extends Model
{
    use HasFactory;

    public function productTypes(): BelongsTo
    {
        return $this->belongsTo(ProductTypes::class);
    }

    public function description(): HasOne
    {
        return $this->hasOne(ProductDescriptions::class);
    }

    public function ratings(): HasMany
    {
        return $this->hasMany(ProductRatings::class);
    }
}
