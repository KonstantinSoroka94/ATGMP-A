Feature: Launches

I want to be ensure that Launches logs could be serached by text

Rule: The logs search by text should be successful

  Background:
    Given Correct project selected
    When Launches selected
    And Logs should be displayed for 10's test

  Scenario Outline:
    When Searching for logs by existing message "<message>"
    Then Search result should not be empty

    Examples:
    | message             |
    | info                |
    | logger              |
    | bug                 |
    | name                |
    | project             |
    | Bug Tracking System |

   Scenario Outline:
    When Searching for logs by existing message "<message>"
    Then Search result should be empty

    Examples:
    | message             |
    | isomething that should not be in the logs          |
    | abbabagalamaga              |
    | should not exist                 |
