<?php

namespace App\Http\Resources\Web;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductAttributeValuesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
      return [
          'id' => $this->id,
          'name' => $this->name,
          'attribute_id' => $this->attribute_id,
          'product_id' => $this->product_id,
          'slug' => $this->slug,
          'is_selected' => false
      ];
    }
}
