<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
	public static function get_data()
	{
		$xxx = self::all();
		return $xxx;
	}

	protected $guarted = [];
}
