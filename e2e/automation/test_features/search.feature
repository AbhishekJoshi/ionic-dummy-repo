Feature: Search

  Scenario: Filters navigation check <a href="https://digitalpfizer.atlassian.net/browse/DAH-305">Jira reference: DAH-305</a>
    Given search page opened
    When I search for "cancer"
    When I slide filters to the right
    Then I should see the last filter which says 'Therapeutic area'

  Scenario: Filters set check <a href="https://digitalpfizer.atlassian.net/browse/DAH-305">Jira reference: DAH-305</a>
    Given search page opened
    When I search for "cancer"
    Then I should see Business Units, Audience, Solution Type, Market, Brand, Therapeutic Area filters

  Scenario: Filter highlighting check <a href="https://digitalpfizer.atlassian.net/browse/DAH-305">Jira reference: DAH-305</a>
    Given search page opened
    When I search for "cancer"
    When I apply "BU" "Oncology" filter
    Then filter tab becomes highlighted

  Scenario: Filters should not appear if 0 results <a href="https://digitalpfizer.atlassian.net/browse/DAH-305">Jira reference: DAH-305</a>
    Given search page opened
    When I search for "zzzzzzzzzzzzzyyy"
    When no search for designated phrase
    Then filters should not appear

  Scenario: Clear button appear if filter applied <a href="https://digitalpfizer.atlassian.net/browse/DAH-305">Jira reference: DAH-305</a>
    Given search page opened
    When I search for "cancer"
    When I apply "BU" "Oncology" filter
    Then "Clear" button should appear

  Scenario: Revert filtered result <a href="https://digitalpfizer.atlassian.net/browse/DAH-305">Jira reference: DAH-305</a>
    Given search page opened
    When I search for "cancer"
    When I apply "BU" "Oncology" filter
    When I tap "Clear" button
    Then filter have to be reverted and initial result set should appear

  Scenario: Numeric representation of result set <a href="https://digitalpfizer.atlassian.net/browse/DAH-305">Jira reference: DAH-305</a>
    Given search page opened
    When I search for "cancer"
    Then I should see a number or results under filters which says 'xx' assets found' for 'cancer'

  Scenario: Expand Search Results and Filtering Beyond First 50 Assets <a href="https://digitalpfizer.atlassian.net/browse/DAH-372">Jira reference: DAH-372</a>
    Given search page opened
    When I search for "Pfizer"
    Then I expect to see not less than "250" results

  Scenario: Clear recent searches <a href="https://digitalpfizer.atlassian.net/browse/DAH-305">Jira reference: DAH-305</a>
    Given search page opened
    When I tap "Clear recent" button
    Then recent searches should be cleared

  Scenario: 'Select all' checkbox check <a href="https://digitalpfizer.atlassian.net/browse/DAH-305">Jira reference: DAH-305</a>
    Given search page opened
    When I search for "cancer"
    When I check "Market" "North America" filter category
    Then all the subfilters have to become checked

  Scenario: Filtering result step by step <a href="https://digitalpfizer.atlassian.net/browse/DAH-305">Jira reference: DAH-305</a>
    Given search page opened
    When I search for "cancer"
    Then I should see filters where subfilters number on the inside equals or less that initial result number when I apply every filter from each category