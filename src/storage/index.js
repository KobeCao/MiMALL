/**
 * Storage封装
 */
const STORAGE_KEY = 'mall';
export default{
  // 存储值
  setItem(key,value,module_name){
    // 如果模块里面有值
    if(module_name) {
      // 先获取user对象存储到val里面
      let val = this.getItem(module_name);
        // 给val里面存值
        val[key] = value;
        // 重新写入到setItem里面,不需要传模块，将val传进去，
        this.setItem(module_name, val)
    }else{
      // 不带模块的 先获取里面所有的值
      let val= this.getStorage();
      // 给val里面存值
      val[key] = value;
      // 重新写入到sessionStorage里面,并且将val这个JSON对象转化成字符串对象传进去
      window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
    }
  },

  // 获取某一个模块下面的属性user下面的userName
  getItem(key,module_name){ // key就是userName module_name 模块名称 user
    // 获取username下面的字段信息
    // 如果模块名称有值,先获取模块名称
    if (module_name){
      let val = this.getItem(module_name);
      // 如果val是对象，返回它的值
      if(val) return val[key];
    }
     // 获取user字段信息  没有key
    return this.getStorage()[key];
  },
  // 获取整个浏览器环境信息
  getStorage(){
    // 取出sessionStorage中的数据
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
  },
  // 清除某一个值
  clear(key,module_name){
    // 获取值
    let val = this.getStorage();
    // 如果有模块名称
    if(module_name){
      // 当val[module_name]这个模块不存在的时候,return回去
      if(!val[module_name]) return;
      // 删除模块下面的某个属性
      delete val[module_name][key];
    }else{
      //没有模块
      delete val[key];
    }
    // 重新将值重新写进去
    window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
  }
}