Feature: Launches

I want to be ensure that features of the launches are exist

  Background:
    Given Correct project selected
    When Launches selected

  Scenario: The Features of the Launches should exist
    #Given Launches page is open
    Then The Features of the Launches should exist
    | feature |
    | total  |
    | passed  |
    | failed  |
    | skipped  |
    | product bug  |
    | auto bug  |
    | system issue  |
    | to investigate  |
    