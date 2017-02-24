
interface IMainMenuContainerProps extends IContainerState { }
interface IMainMenuContainerState extends IContainerState { }

interface IContainerState {
    currentModule: string;
    menus?: IMainMenu[];
}

interface IMenuContainer { 
    menus: IMainMenu[];
}

interface IMyNumbersComponent {
    title: string;
    menus: IMainMenu[];    
}

interface IMainMenu {
    "id": string;
    "title": string;
    "position": number;
    "backgroundColor": string;
}

interface IMyNumbersState {
    currentModule: string;
}

interface IAccountsContainer { }

interface IAccountContainerState { }
