export default () => Promise.resolve(window.MathJax ||
    import(/* webpackChunkName: "mathjax" */ 'mathjax-full/components/src/tex-svg/tex-svg.js').then(() => {
        return window.MathJax;
    }));

