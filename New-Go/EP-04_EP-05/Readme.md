## knowledge notes

1** config driven UI : It is the way that how our UI changes according to the config or data coming from the backend like in swiggy or any other food delivery app we can see that the UI is changing as per the location or city or state or even country or there are many things that are changing as per the config or data coming from the backend. 
Based on it we can create a generic UI that can be used for different purposes and can be configured as per the requirements.

2** Component Composition: It is the way that how we can create a complex UI by composing smaller components and can reuse them in different parts of the application.

3** It is recommanded not use index as the keys during the mapping of the data as if the data changes it will create the UI changes which is not good for the performance and the user experience.
Try to use the different id's for it send by the backend for the each object or element of that data to which the map is applied, if it is not given then create a unique key for it, for example if it is an array of strings like ["hello", "world", "good", "morning"] then the map function should be like 
{arr.map((ele) => (
    <li key={ele}>{ele}</li>
))}
