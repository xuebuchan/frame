export default {
    name: 'functional-button',
    functional: true,
    render(createElement, {data,loading}) {
        return createElement('button', data,[loading],'担惊受恐')
    }
}

