<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         \App\Models\User::factory(10)->create();
		   \App\Models\Subject::factory(10)->create()->each(function ($subject) {
            // Seed the relation with one address
            $usersub = \App\Models\UserSubject::factory()->make();
            $subject->usersubject()->save($usersub);

            // Seed the relation with 5 purchases
            //$purchases = factory(App\CustomerPurchase::class, 5)->make();
            //$customer->purchases()->saveMany($purchases);
        });
    }
}
