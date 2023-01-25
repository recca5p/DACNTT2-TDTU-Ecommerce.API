package com.cntt2.product.controller;

import com.cntt2.product.dto.ProductRequest;
import com.cntt2.product.model.Product;
import com.cntt2.product.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("api/v1/product")
public record ProductController(ProductService productService) {

    //get all products
    @GetMapping
    public List<Product> getProducts(
            @RequestParam(name = "id", required = false) List<String> idList,
            @RequestParam(name = "s", required = false) String slug,
            @RequestParam(name = "c", required = false) String category
            ) {
        return productService.getProducts(idList, slug, category);
    }

    //get single product
    @GetMapping(path = "{productSlug}")
    public Product getSingleProduct(@PathVariable("productSlug") String slug) {
        return productService.getSingleProduct(slug);
    }

    //create product
    @PostMapping
    public Product createProduct(
            @RequestBody ProductRequest productRequest,
            @RequestAttribute String userId
    ) {
        log.info("New product created {}", productRequest);
        return productService.createProduct(productRequest, userId);
    }

    //update product
    @PutMapping(path = "{productId}")
    public Product updateProduct(
            @PathVariable("productId") String id,
            @RequestBody ProductRequest productRequest,
            @RequestAttribute String userId
    ) {
        return productService.updateProduct(id, productRequest, userId);
    }

    //delete product
    @DeleteMapping(path = "{productId}")
    public void deleteProduct(@PathVariable("productId") String id) {
        productService.deleteProduct(id);
    }
}
