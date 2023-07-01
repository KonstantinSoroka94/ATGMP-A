Feature: Launches

I want to be ensure that filters for the launches are exist

Rule: It should be possible to filter Launches

  Background:
    Given Correct project selected
    When Launches selected

  Scenario Outline:
    Given User add filter
    When User select filter by name "<name>" with value "<value>" and condition "<condition>"
    Then Filtered result should exist

    Examples:
    | name            | condition                  | value   |
    | Total           | Greater than or equal      | 1       |
    | Passed          | Greater than or equal      | 1       |
    | Failed          | Greater than or equal      | 1       |
    | Skipped         | Greater than or equal      | 1       |
    | Product bug     | Greater than or equal      | 1       |
    | Automation bug  | Greater than or equal      | 1       |
    | System issue    | Greater than or equal      | 1       |
    | To investigate  | Greater than or equal      | 1       |

  Scenario: The result of filtering should be empty under the appropriate conditions
    Given User add filter
    When User select filter by name with value that not exist and condition
    | name            | condition  | value   |
    | Total           | Equals     | 1       |
    | Passed          | Equals     | 1       |
    | Failed          | Equals     | 1       |
    | Skipped         | Equals     | 1       |
    | Product bug     | Equals     | 1       |
    | Automation bug  | Equals     | 1       |
    | System issue    | Equals     | 1       |
    | To investigate  | Equals     | 1       |
    Then Filtered result should not exist