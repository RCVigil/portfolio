import React from "react";
import '../Styles/Components/Menu.sass'

export default Menu = () => {
    return (
      <div>
        %nav.navbar.navbar-inverse.navbar-fixed-top
        .container-fluid
        .navbar-header
        %a.navbar-brand{'{'}:href =&gt; "#"{'}'} Dan Stuart
        %button.btn.navbar-btn.btn-link.pull-right{'{'}"data-target" =&gt; "#modalNavigation", "data-toggle" =&gt; "modal", :type =&gt; "button"{'}'}
        %span.sr-only Open navigation
        %span.glyphicon.glyphicon-menu-hamburger
        #modalNavigation.modal.fade.modal-fullscreen-menu{'{'}:role =&gt; "dialog", :tabindex =&gt; "-1"{'}'}
        %button.close{'{'}"aria-label" =&gt; "Close", "data-dismiss" =&gt; "modal", :type =&gt; "button"{'}'}
        %span.sr-only Close navigation
        %span.glyphicon.glyphicon-remove
        .modal-dialog
        %nav.list-group
        %a.list-group-item{'{'}:href =&gt; "#"{'}'} Home
        %a.list-group-item{'{'}:href =&gt; "#"{'}'} Services
        %a.list-group-item{'{'}:href =&gt; "#"{'}'} Meet the Team
        %a.list-group-item{'{'}:href =&gt; "#"{'}'} Careers
        %a.list-group-item{'{'}:href =&gt; "#"{'}'} Contact Us
        .jumbotron.text-center
        .container
        %h1 Bootstrap Fullscreen Menu
        %p This is a quick demonstration of placing site navigation within a Bootstrap modal.
        %button.btn.btn-primary.btn-lg{'{'}"data-target" =&gt; "#modalNavigation", "data-toggle" =&gt; "modal", :type =&gt; "button"{'}'}
        Open Navigation
      </div>
    );
}
