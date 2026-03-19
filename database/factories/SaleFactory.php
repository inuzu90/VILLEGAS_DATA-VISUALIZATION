<?php

namespace Database\Factories;

use App\Models\Sale;
use Illuminate\Database\Eloquent\Factories\Factory;

class SaleFactory extends Factory
{
    protected $model = Sale::class;

    public function definition(): array
    {
        return [
            'product' => $this->faker->randomElement(['Laptop', 'Phone', 'Tablet']),
            'amount' => $this->faker->numberBetween(1, 10),
            'price' => $this->faker->randomFloat(2, 100, 2000),
            'sale_date' => $this->faker->dateTimeBetween('-30 days', 'now'),
            
              

        ];
    }
}
