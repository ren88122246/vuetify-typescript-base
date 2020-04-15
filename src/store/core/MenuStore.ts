import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import SysMenu from '@/entity/store/SysMenu';
// import MyappApis from './apis/MyappApis';

@Module
class MenuStore extends VuexModule {
    public static namespaced: boolean = true;   // 这个属性
    // 菜单数据列表
    public menuList: SysMenu[] = [
        new SysMenu('1' , '-1' , '基本资料' , 'mail' , '/module/path' , '1' , [
            new SysMenu('2' , '1' , '个人信息' , 'mail' , '/main/personInfo' , '1' , []),
            new SysMenu('3' , '1' , '机构信息' , 'mail' , '/main/orgInfo' , '1' , []),
        ]),
        new SysMenu('4' , '-1' , '安全设置' , 'mail' , '/module/path' , '1' , [
            new SysMenu('5' , '4' , '安全设置' , 'mail' , '/module/path' , '1' , []),
        ]),
        new SysMenu('6' , '-1' , '站内消息' , 'mail' , '/module/path' , '1' , []),
        new SysMenu('7' , '-1' , '系统管理' , 'mail' , '/module/path' , '1' , [
            new SysMenu('8' , '7' , '菜单管理' , 'mail' , '/main/system/dic/' , '1' , []),
            new SysMenu('9' , '7' , '机构管理' , 'mail' , '/module/path' , '1' , []),
            new SysMenu('10' , '7' , '用户管理' , 'mail' , '/module/path' , '1' , []),
            new SysMenu('11' , '7' , '角色管理' , 'mail' , '/module/path' , '1' , []),
            new SysMenu('12' , '7' , '字典管理' , 'mail' , '/main/system/dic' , '1' , []),
        ]),
    ];
    // 菜单显示状态
    public menuDisplay: boolean = false;
    // 获得菜单数据列表
    get getMenuList(): SysMenu[] {
        return this.menuList;
    }
    // 获得菜单显示状态
    get getMenuDisplay(): boolean {
        return this.menuDisplay;
    }
    // 设置系统菜单的值
    @Mutation
    public menuListMutation(argMenuList: SysMenu[]) {
        this.menuList = argMenuList;
    }
    @Mutation
    public menuDisplaySwitchMutation(argDisplay: boolean) {
        this.menuDisplay = argDisplay;
    }
    // 跟据用户初始化菜单数据
    @Action({ commit: 'menuListMutation' })
    public async initUserMenuAction(argUserId: string) {
        try {
            /* 异步请求菜单，并存于vuex */
            // const menudata = await MyappApis.menuList(argUserId);
            // return menudata;
        } catch (e) {
            throw e;
        }
    }
    // 菜单显示状态切换
    @Action
    public async menuDisplaySwitchAction(argDisplay: boolean) {
        this.context.commit('menuDisplaySwitchMutation' , argDisplay);
    }
}
export default MenuStore;
