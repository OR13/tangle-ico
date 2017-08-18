function setUpTangle() {
    var element = document.getElementById("example");
    var tangle = new Tangle(element, {
        initialize: function () {
            this.yearly_net_revenue = 100;
            this.yearly_dividend_revenue_percent = 10;

            this.token_total = 1000;
            this.token_holdings = 10;
            this.total_shareholder_payout = 0;
            this.share_holder_percent = 0;
            this.share_holder_earnings = 0;
            // this.cookies = 4;
        },
        update: function () {
            this.total_shareholder_payout = this.yearly_net_revenue * this.yearly_dividend_revenue_percent / 100;
            this.share_holder_percent = this.token_holdings / this.token_total * 100;
            this.share_holder_earnings = this.total_shareholder_payout * this.share_holder_percent / 100;
            // this.calories = this.cookies * this.caloriesPerCookie;
        }
    });
    particlesJS.load('particles-js', 'src/particles/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });
}