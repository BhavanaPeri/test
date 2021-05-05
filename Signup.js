class Signup{
    constructor(){
    this.title = createElement(h2);
    this.id = createInput("Mail ID");
    this.username = createInput("username");
    this.password = createInput("password");
    this.signup = createButton("Sign up");
    }
    hide(){
        this.title.hide();
        this.id.hide();
        this.username.hide();
        this.password.hide();
        this.signup.hide();
    }
    display(){
        this.title.html("Sign Up");
        this.title.position(windowWidth/2-50,WindowHeight/4);
        this.id.position((windowWidth/2)-50,windowHeight/4 + 50);
        this.username.position((windowWidth/2)-50,windowHeight/4 + 80);
        this.password.position((windowWidth/2)-50,windowHeight/4 + 110);
        this.signup.position((windowWidth/2)-50,windowHeight/4 + 140);
        this.signup.mousePressed(()=>{
            this.title.hide();
            this.id.hide();
            this.username.hide();
            this.password.hide();
            this.signup.hide();
            user.index+=1;
            users.name = this.username.value();
            users.mail = this.id.value();
            users.pwd = this.password.value();
           // users.update();
            users.check();
            var log = new Login();
            
        })
    }
}