<?php

namespace Database\Factories;

use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProjectFactory extends Factory
{
    protected $model = Project::class;

    public function definition()
    {
        return [
            'name' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'due_date' => $this->faker->dateTimeBetween('now', '+1 year'),
            'status' => $this->faker->randomElement(['In Progress', 'Completed', 'Pending']),
            'image_path' => null,
            'created_by' => User::factory(),  // Use User factory to generate the created_by ID
            'updated_by' => User::factory(),  // Use User factory to generate the updated_by ID
        ];
    }
}
