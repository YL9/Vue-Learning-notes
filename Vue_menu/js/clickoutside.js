Vue.directive('clickoutside', {
  bind: function (el, binding, vnode) {
    function documentHandler (e) {
      if (el.contains(e.target)) {
        return false
      }
      if (binding.expression) {
        binding.value(e)
      }
    }
    el.__vueClickOutside__ = documentHandler
    document.addEventListener('click', documentHandler)
  },
  unbind: function (el, binding) { // unbind 指令只调用一次，与元素解绑时调用
    document.removeEventListener('click', e.__vueClickOutside__)
    delete el.__vueClickOutside__
  }
})