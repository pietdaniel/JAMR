define([
    "js/jquery-1.11.1.minjs",
  ], function($) {
  var Router;
  return Router = (function(_super) {
    __extends(Router, _super);

    function Router() {
      this.geo = __bind(this.geo, this);
      //this.clients = __bind(this.clients, this);
      //this.fetchSubscriptionsError = __bind(this.fetchSubscriptionsError, this);
      this.initialize = __bind(this.initialize, this);
      return Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.initialize = function() {
      
      this.hubId = PortalIdParser.get();
      this.subscriptions = new SubscriptionCollection(this.hubId);
      this.account = new Account({
        hubId: this.hubId
      });
      this.accountData = this.account.fetch();
      this.promize = this.subscriptions.fetch({
        error: this.fetchSubscriptionsError,
        timeout: 25000
      });
      this.subscriptions.pager();
      return PartnerAgreement.show();
    };

    Router.prototype.fetchSubscriptionsError = function(model, response, options) {
      this.subscriptions.models = [];
      this.subscriptions.origModels = [];
      this.view = new SubscriptionCollectionView({
        collection: this.subscriptions,
        account: this.account,
        errorMessage: 'Unable to load clients. Please try again'
      });
      this.view.initSortbar();
      return $('#table').html(this.view.render().el);
    };

    Router.prototype.routes = {
      '': 'clients'
    };

    Router.prototype.clients = function() {
      return this.promize.then((function(_this) {
        return function() {
          var grossMRR, progression, subscription, _i, _len, _ref;
          _this.models = [];
          _ref = _this.subscriptions.models;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            subscription = _ref[_i];
            if (!subscription.get('hasSelfPurchasePortal')) {
              _this.models.push(new Client({
                ageInDays: subscription.get('ageInDays'),
                closeDate: subscription.get('closeDate'),
                contactTierUpgrade: subscription.get('contactTierUpgrade'),
                hubid: subscription.get('hubid'),
                maxNumberOfContacts: subscription.get('maxNumberOfContacts'),
                mrr: subscription.get('mrr'),
                productType: subscription.get('productType'),
                score: subscription.get('score'),
                url: subscription.get('url'),
                id: subscription.get('id'),
                displayUrl: subscription.get('displayUrl'),
                account: subscription.get('account'),
                hasSelfPurchaseportal: subscription.get('hasSelfPurchasePortal'),
                chiCreatedDate: subscription.get('chiCreatedDate')
              }));
            }
          }
          _this.clientCollection = new ClientCollection(_this.models);
          grossMRR = _this.clientCollection.getGrossMRR();
          progression = 'None';
          if (_this.account.get(0) && _this.account.get(0).partnerCategory) {
            progression = _this.account.get(0).partnerCategory;
          }
          _this.overview = new Overview({
            grossMRR: grossMRR,
            avgAge: _this.clientCollection.getAvgAge(),
            avgCHI: _this.clientCollection.getAvgCHI(),
            progression: progression
          });
          _this.overviewView = new OverviewView({
            overview: _this.overview
          });
          $('#overview').html(_this.overviewView.render().el);
          _this.clientCollection.pager();
          _this.clientsView = new ClientsCollectionView({
            collection: _this.clientCollection,
            account: _this.account,
            pagination: true
          });
          $('#table').html(_this.clientsView.render().el);
          _this.clientsView.renderScreenshots();
          return UsageTracker.log('Dashboard visit');
        };
      })(this));
    };

    return Router;

  })(Backbone.Router);
});