'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">digital-banking-web documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-ad059a507331a2cb2525def11f5dc9fa3e311207fb129b2bacd29344cdbe987003af990a01f0f608f836f1a36432471e99ed4b5a01fe18b3e85068070f52878b"' : 'data-bs-target="#xs-components-links-module-AppModule-ad059a507331a2cb2525def11f5dc9fa3e311207fb129b2bacd29344cdbe987003af990a01f0f608f836f1a36432471e99ed4b5a01fe18b3e85068070f52878b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-ad059a507331a2cb2525def11f5dc9fa3e311207fb129b2bacd29344cdbe987003af990a01f0f608f836f1a36432471e99ed4b5a01fe18b3e85068070f52878b"' :
                                            'id="xs-components-links-module-AppModule-ad059a507331a2cb2525def11f5dc9fa3e311207fb129b2bacd29344cdbe987003af990a01f0f608f836f1a36432471e99ed4b5a01fe18b3e85068070f52878b"' }>
                                            <li class="link">
                                                <a href="components/AccountsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerAccountsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerAccountsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomersByCityComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomersByCityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditCustomerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditCustomerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeatmapTransactionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeatmapTransactionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileappVsWebsiteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MobileappVsWebsiteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewCustomerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewCustomerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SideBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SideBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopWidgetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TopWidgetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TransactionPerAgeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransactionPerAgeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AccountService.html" data-type="entity-link" >AccountService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomerService.html" data-type="entity-link" >CustomerService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AccountDetails.html" data-type="entity-link" >AccountDetails</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AccountOperation.html" data-type="entity-link" >AccountOperation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Customer.html" data-type="entity-link" >Customer</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});