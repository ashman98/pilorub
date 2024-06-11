<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductSubDescriptions extends Model
{
    use HasFactory;

    public function productDescriptions(): BelongsTo
    {
        return $this->belongsTo(ProductDescriptions::class);
    }
}
