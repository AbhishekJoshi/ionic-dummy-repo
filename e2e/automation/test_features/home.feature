Feature: Home

  Scenario: Welcome screen check <a href="https://digitalpfizer.atlassian.net/browse/DAH-634">Jira reference: DAH-634</a>
    Given I am a user who runs app for the first time and sees Welcome screen
    When I scroll and check each each frame image, title and description
    Then I should see 'Get Started' button