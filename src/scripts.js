function setUpTangle() {
    var element = document.getElementById("example");
    var tangle = new Tangle(element, {
        initialize: function () {
            this.cost_cloud_in_usd = .5;
            this.cost_usd_in_eth = 1/300;
        },
        update: function () {
            this.cost_eth_in_usd = 1 / this.cost_usd_in_eth;
            this.cost_cloud_in_eth = this.cost_cloud_in_usd  *  this.cost_usd_in_eth;
           
        }
    });
    particlesJS.load('particles-js', 'src/particles/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });
}