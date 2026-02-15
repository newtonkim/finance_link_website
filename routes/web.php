<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/features/core-banking', function () {
    return Inertia::render('Features/CoreBanking');
});



Route::get('/features/point-of-sale', function () {
    return Inertia::render('Features/PointOfSale');
});

Route::get('/features/wallet', function () {
    return Inertia::render('Features/Wallet');
});
