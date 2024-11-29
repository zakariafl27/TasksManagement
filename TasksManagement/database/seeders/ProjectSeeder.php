<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;
use App\Models\User;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Ensure there's at least one user
        $user = User::first() ?? User::factory()->create();

        // Create sample projects
        Project::factory(10)->create([
            'created_by' => $user->id,
            'updated_by' => $user->id,
        ]);
    }
}
