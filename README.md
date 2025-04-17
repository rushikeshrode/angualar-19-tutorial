# Angualar19Tutorial

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.7.

## Development server
To start a local development server, run:

```bash
ng serve

```bash
ng generate component component-name

✅ My Angular Topics Summary:
        Data Binding
        Interpolation ({{ }})
        Property & Attribute Binding
        Event Binding ((click))
        Two-Way Binding ([(ngModel)])
        Mini Projects
        Counter project with event handlers and dynamic styling
        Event Bindings
        Click, Mouse events, Input, Focus/Blur
        Control Flow
        *ngIf, *ngSwitch, *ngSwitchCase
        Loops
        *ngFor
        Signals (New Angular Feature)
        Writable, Computed, effect()
        Dynamic Styles
        [style.property], conditional styling
        Directives
        Structural (*ngIf, *ngFor)
        Attribute ([ngStyle], [ngClass])
        Components and <ng-template>
        Routing
        Dynamic/Static Routes
        Wildcard route ('**')
        Error pages
        Data Sharing
        @Input(), @Output(), query params, route data
        Reactive Forms
        FormControl, FormGroup, validators
        Template-Driven Forms
        ngModel, form validation
        Child-Parent Communication
        Inputs/Outputs with EventEmitter
        Pipes
        Built-in and custom pipes
        Services & HTTP
        Creating and injecting services
        API calls with HttpClient
🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽

# chapter 1
Four types of event bindings 
    1: Data Binding [Interpolation] : {{userName}}
    2: Attribute Binding : [src]="imgLink"
    3: Event Binding : (click)="sayHello()"
    4: Two-Way Binding : [(ngModel)]="userEmail" 

# chapter 2
Counter Project

#  chapter 3 
Event Bindings 
    1) (click)="handleEvent($event)"    # when clicked
    2) (mouseenter)="redBtn($event)"    # cursor roaming onto element
    3) (mouseover)="greenBtn($event)"   # cursor moved out of element
    4) (input)="address($event)"        # when addresing input tag
    5) (focus)="focusEvent($event)"     # clicked on textarea/input field
    6) (blur)="blurEvent($event)"       # clicked outside element

#  chapter 4
Control Flow statement : if-else, switch
    controlflow : if-else
    switch : switch case
    
#  chapter 5
For loop

# chapter 6 
Signal in Angular
signals are wrapper around value that notifies when value changes.
signals can be generic, if u hv to use two data type for variable. x=signal<number|string>
    6.1) Writable signals(changeble) : can be change using set() / update() method
    6.2) Computed signals(read-only) : almost const as they cannot be changed but can change if value of something they depend on changes. like if z=x+y, we cant change z but if u change x/y, it will change z.

# chapter 7
use of effect()

# chapter 8
Dynamic Style
ex: [style.fontSize] = 10px; 
    [style.fontSize] = "size"; where size is define in ts file. size=20px
    [style.fontSize.px] = "size"; where size is define only in number, not pixel or pertengage. (px:pixel),(pt:%)
    [style.backgroundColor] = "zoom?'pink':'yellow'"; zoom is boolean


# chapter 9 : Directives
    Type	         Affects	                    Example
Component	    View+Logic,HTML temp	     <app-home>, @Component
Structural	    DOM Layout	                 *ngIf, *ngFor, [ngSwitch], *ngSwitchCase
Attribute	    Style/Behavior	             [ngStyle], [ngClass]  

learn abt <ng-template #name> html code </ng-template> tag. 

# chapter 10 : Routing. advanced: Dynamic Routing. Wildcard path path:'**' matches all.
    >Routing
imports in ts file RouterLink(where u use routerLink=""), RouteOutlet(where u display probably app.component.html)
Use [routerLink]="'-'" when binding to variable or dynamic route.Use single '-' when not using variables from ts file
Use routerLink="" without brackets when your path is static.
    >Dynamic Routing
Use routerLink like this : routerLink="output/{{user.id}}"
make sure you added that path in app.routes.ts
you can set dynamic path using :colin. ex: path: 'dynamicRoute/output/:id/:name'

# chapter 11 : error page 404 page not found
add path route in "app.routes.tx" : { path:'**', component:ErrorpageComponent}
path: '**' is called a wildcard route.
It matches any URL that doesn’t match earlier defined routes, i.e., it's used as a catch-all fallback.
make sure to use it at last, as it matches everything. thats why its use for page not found 404

# chapter 12 : sharing data between 2 pages: there are 3 ways
    components used : login(sends) and output(receives) data.


# chapter 12 : Reactive form : changes via ts file
    > Form Control
import in ts file : ReactiveFormsModule. You can set the variables using new FormControl().
ex: username = new FormControl(); & new FormControl('default data') sets the default value.
make sure to retrive data using value method. Use "username.value()" to retrieve data from username.
then u hv to bind the same variable name to input field. So that it listen the input. ex: [formControl]="username"
Now your input block is bind with variable username. just like [(ngModel)].

    > Form Group
import in ts file : ReactiveFormsModule
crete a formGroup({object of key:new FormControl()})
use [formGroup]="profileForm" in html parent tag
now set the form control using:: formControlName="name" 
why FormGroup? It gets the all data of formControlName in one Object. Make it easy to handle.

    > Validation
FormControl has 2nd param that takes Validators method: required, minLength(), maxLength(), pattern('regex').
Now use if statement to check is field hasError('required) or touched()/invalid()/valid()

# chapter 13 :  Template-Driven Form : changes via html form
    > Template-Driven Form: form tag necessary
import FormsModule, use referance variable & define ngModel to it: #userForm="ngForm"
make sure you have name & ngModel property set for every tag that you want to read.
this form values comes in 'NgForm' type. have a look at addUser(val:NgForm) method.
val : have obj of all data. val?.name : specific tag value. Why? : it can be null.
    > Validation in Template-Driven Form  : name field is imp
named the form as referenceVariable ex. #userForm2="ngForm"
add required in field that u r validating
add ngModel and set its name to ngModel :
ex.<input ngModel #name="ngModel" required maxlength="30" type="text" name="name">
Now you are ready to check required, invalid and touch methods with if condition.

# chapter 14 : Data Send-Receive : Child-Parent-Child : use @Input() & @Output from Child itself.
Note: Parent component is where we use Html selector to render, Child component is where we use @Input,@Output()

    >> Send Data From Parent to Child
use component [ex.selector: 'app-pass-data-to-child'] in parent html. and pass data as below:
step1: <app-pass-data-to-child childName="Rushikesh Rode" [myCity]="myCity">
        </app-pass-data-to-child>
step2: get that input using @Input() in Child: @Input() childName:string='';

    >> Send Data From Child to Parent
step 1 : crete a data u want to send: 
use @Output and named it(ex.getStates) equal to new EventEmiter(). comes from EventEmiter-Angular/core.
step 2: receive the data in parent html via child's selector using same name u assign in parent.(getStates) and assign method to it the has $event param. 
Now create that method in parents ts file with coming input type(not event:Event). Sets the data to local variable to use it for the parent component.


# chapter 15 : Pipes : imports required for each pipe. ex: ToUpperCasePipe
used to apply functions to parameter. used in interpolation. ex: {{ 'Ram' |  touppercase }}
we can create own pipe. cmd : ng generate pipe anyname
return value that we want to, import where u want to use & used it in html file as pipe.


# chapter 16 : Services with API
cmd : ng generate service my-service / ng g s my-service
Services in Angular are used to share logic, data, and functionality across components. They're commonly used for tasks like:
        Fetching data (e.g., via HTTP)
        Business logic
        State management
        Logging
        Utility functions
Services are called in constructor(where we are using them) : constructor(private myService: MyService) {}

    >> Services with API
import http:HttpClient in service constructor. Add provideHttpClient() in app.config.ts providers [].
create methods(getProductsList()) that returns api endpoints : ex. return this.http.get(this.url);
Now import service to components and use it with :
    << this.productsService.getProductsList().subscribe((data:any)=>{ this.products = data.products; }) >>








