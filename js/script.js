// Copyright (c) 2022 Brayden Blank All rights reserved
//
// Created by: Brayden Blank
// Created on: March 10 2022
// This file contains the JS functions for index.html

/**
 * This function gets the users input and calculates the area of a trapezoid
 */
function convertClicked() {
  //input
  const fahrenheit = parseInt(document.getElementById("fahrenheit").value)

  //process
  const celsius = (fahrenheit - 32) * 5/9
  
  //output
  document.getElementById("temperature-in-celsius").innerHTML = "The temperature is: " +  celsius.toFixed(2) + " °C!"
}