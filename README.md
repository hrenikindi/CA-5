# CA-5

Welcome to this Continuous Assessment-5 of Front-end Web Development

What are you expected to do?
Create a website that displays a list of books - using React.

(You are free to use any method to solve this assessment; By method we mean -> you can use class based approach or functional based approach or mix of both in order to solve the following assessment.)

Description:
Books are a very important part of everyone’s life. So it is very important that books should be available for everyone. Sometimes, there are cases where certain books are available only in certain areas. In order to avoid such situations and make books accessible to everyone, your task is to create a website that solves this issue by providing books online.

You can use the following API in order to fetch all the books.

Api: https://reactnd-books-api.udacity.com/books

headers: { 'Authorization': 'whatever-you-want' }

Your output should look something like the image below: 

Final output:



![image](https://github.com/hrenikindi/CA-5/assets/159125359/6dc177e5-c21b-428a-8227-88308822d02f)



Replace Google Play with Kalvium Books.



You can go through the below link for more clarity: Google Play Store



(NOTE: There is no Register button in the above link, but for this assessment, we have to create a Register button)



Because Kalvium team want to make these books accessible and affordable to everyone, therefore, all the books should be free of cost.



( In the above image/reference - there are some costs given → you can skip that and make every book free for now ).



Register Button: Once you click on the register button, you should be directed to a new page -> where a form will be displayed.



You are free to design the form in your own way, but if you want some reference, then you can refer to the following image.
![image](https://github.com/hrenikindi/CA-5/assets/159125359/3753d5c6-9b7f-4065-af98-6053ebdd3e24)



NOTE: You can design the form in your own way, but the following fields must be there:


Name


Email


Password


Repeat password


A button -> which has Sign up written on it.


Constraints for every field are given below:


Name: The name should not be greater than 30 characters and less than 3 characters.


Email: The email must be a valid email. A valid email address ( for this assessment ) is that address, which has an “@” symbol.


Password: The password should be at least 10 characters long, with at least one special character.


Repeat your password: The value of this field must match the value of the Password field.


Register button: This button should not work if any of the above constraints are not being followed or if any one of the fields is not filled.


If all the information is correctly filled in, only then the register button should work.

(Register button should work means: If you click on the register button, the data you filled in the form should be saved for that particular state.)



Search bar: As you must have observed in the final output image, there is a search bar as well. The functionality of the search bar is to filter out the books based on the text written in the search bar. 


So for eg, if I search “The Great” → then all the books starting with these two words should be displayed on the screen.


