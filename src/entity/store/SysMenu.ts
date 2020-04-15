export default class SysMenu {
    public menuId: string;
    public parentMenuId: string;
    public label: string;
    public icon: string;
    public module: string;
    public param: string;
    public children: SysMenu[];
    public data: object;

    constructor(menuId: string, parentMenuId: string, label: string, icon: string, argModule: string, param: string, argChildren: SysMenu[] = [], argData: object = new Object()) {
        this.menuId = menuId;
        this.parentMenuId = parentMenuId;
        this.label = label;
        this.icon = icon;
        this.module = argModule;
        this.param = param;
        this.children = argChildren;
        this.data = argData;
    }
}
