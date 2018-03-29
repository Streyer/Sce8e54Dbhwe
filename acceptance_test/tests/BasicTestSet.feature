Feature: Basic Test Set
  This is a Set of Basic Tests.

  Background: log in
    Given I am a logged in User


  Scenario: create Pricing Assets
    Given I click "List Pricing Assets"
    And I click "Add Pricing Asset"
    And I set the Display Name to "Pricing Asset MGr" and the current Date
    Then I set the Type to "VEHICLE"
    And I click the Save Button
    And I see the created Pricing Asset in the List


  Scenario: edit a Pricing Asset
    Given I click "List Pricing Assets"
    When I edit the Pricing Asset "test MGr"
    And change the Display name to "Edit Pricing Asset Protractor Test"
    And I click the Save Button
    ##### revert the changes ####
    And I see the created Pricing Asset in the List
    When I edit the Pricing Asset "Edit Pricing Asset Protractor Test"
    And change the Display name to "test MGr"
    And I click the Save Button
    And I see the created Pricing Asset in the List


  Scenario: create a empty Price Plan
    Given I create a new price plan
    When I set the price group name to "Protractor Price Plan" and the current Date
    Then I set the price group to "PRIVATE"
    And I save the new Price Plan


  Scenario: configure a empty Price Plan
    Given a empty Price Plan
    When I configure the price plan with 1 hours and 4 days, containing the pricing assets: A4 Platin, A3 Platin, A4 Gold, A4 Silver
    And I remove two Assets
    Then I save the configured Price Plan


  Scenario: create Price Plan
    Given I create a new price plan
    When I set the price group name to "Protractor Price Plan" and the current Date
    And I set the price group to "PRIVATE"
    And I save the new Price Plan
    And I configure the price plan with 1 hours and 4 days, containing the pricing assets: A4 Platin, A3 Platin, A4 Gold, A4 Silver
    Then I save the configured Price Plan


  Scenario: update a Price Plan
    Given a Price Plan "MGr Protractor Price Plan"
    When I update the price plan with 1 hours and 4 days, containing the pricing assets: A4 Platin, A3 Platin, A4 Gold, A4 Silver
    Then I save the configured Price Plan

  Scenario: copy a Price Plan
    Given I create a new price plan
    When I set the price group name to "Copy Price Plan" and the current Date
    Then I set the price group to "PRIVATE"
    And I click the Clone from existing Price Plan Button
    And I select the price plan I want to copy: "Protractor Price Plan Mon Oct 23 2017 08:44:55 GMT+0200 (CEST) - PRIVATE"
    And I save the copied Price Plan


  Scenario: edit the configurable Start and End of Weekend
    Given I check the validity of Price Plan "Configureable Weekends Mon Oct 23 2017 10:19:58 GMT+0200 (CEST)"
    And a Price Plan "Configureable Weekends Mon Oct 23 2017 10:19:58 GMT+0200 (CEST)"
    When I change the End of Weekend to Tuesday, 10:20:17
    And I change the Start of Weekend to Saturday, 17:02:08
    And I save the configured Price Plan
    And I go back to the Price Plan Overview
    And I check if a new Version of Price Plan "Configureable Weekends Mon Oct 23 2017 10:19:58 GMT+0200 (CEST)" was created
    And I check the validity of Price Plan "Configureable Weekends Mon Oct 23 2017 10:19:58 GMT+0200 (CEST)"
    And a Price Plan "Configureable Weekends Mon Oct 23 2017 10:19:58 GMT+0200 (CEST)"
    And I change the End of Weekend to Monday, 09:00:00
    And I change the Start of Weekend to Friday, 15:00:00
    And I save the configured Price Plan
    And I go back to the Price Plan Overview
    Then I check if a new Version of Price Plan "Configureable Weekends Mon Oct 23 2017 10:19:58 GMT+0200 (CEST)" was created




