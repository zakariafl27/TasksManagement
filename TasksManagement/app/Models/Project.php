<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'due_date',
        'status',
        'image_path',
        'created_by',
        'updated_by',
    ];

    public function creator(){
        return $this->belongsto(User::class, 'created_by');
    }

    public function updater(){
        return $this->belongsto(User::class, 'updated_by');
    }
}
