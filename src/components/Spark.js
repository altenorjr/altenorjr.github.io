import sparkScroll from 'react-spark-scroll-gsap';

export const { SparkScroll, SparkProxy, sparkScrollFactory } = sparkScroll({
    invalidateAutomatically: true,
    actions: {
        scrollTo: {
            up: (o) => console.log(o),
            down: (o) => console.log(o)
        }
    }
});