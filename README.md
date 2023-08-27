# AWS Serverless Application: Hashing State Machine with Step Functions and Lambda

This repository contains the code and configuration for a serverless application built on AWS that implements a finite state machine using AWS Step Functions and Lambda functions. The application exposes REST API entry points through AWS API Gateway to perform a hashing operation based on user input.

# Learning Outcomes

By completing this assignment, I've gained the following skills and knowledge:

1. Understanding the benefits of serverless computing.
2. Implementing a finite state machine using AWS Step Functions.
3. Creating serverless compute mechanisms using AWS Lambda.
4. Building serverless APIs using AWS API Gateway.

# Assignment Overview

The goal of this assignment was to create a serverless application that takes input through a REST API, processes it using a state machine, invokes Lambda functions for hashing, and sends the result to another endpoint. 

**Here's a high-level overview of the steps:**

1. An incoming POST request with JSON data is made to the /hashing/select endpoint.
2. The State Machine processes the JSON input and selects an option based on the input.
3. A Lambda function is triggered based on the selected option, performing a hashing operation on the input data.
4. The Lambda function sends the hashed result as a POST request to a different endpoint, /end.
5. A grade for the recent test submission can be obtained by sending a POST request to the /results endpoint.