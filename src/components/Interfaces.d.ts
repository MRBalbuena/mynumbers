interface IAccountsContainer {}

interface IAccountContainerState extends IHiddableComponent {}

interface IMainMenuContainer{}
interface IMainMenuContainerState extends IHiddableComponent{}

interface IHiddableComponent {
    visible : boolean;
}

interface IMyNumbers {
    title : string;
}
