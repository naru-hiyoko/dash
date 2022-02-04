export default () => Promise.resolve(window.MathJax ||
    import(/* webpackChunkName: "mathjax" */ 'mathjax-full/components/src/tex-svg/tex-svg.js').then(() => {
        var elements = document.getElementsByClassName('tex2jax_process');

        if(elements.length) {
            window.MathJax.config.startup.elements = elements;
        } else {
            window.MathJax.config.startup.typeset = false;
        }

        return window.MathJax;
    })
);
