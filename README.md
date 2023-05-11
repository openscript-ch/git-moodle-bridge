Unfortunately it is impossible to change a courses content via the API of Moodle. With that, this project became obsolete.

# Markdown Moodle Bridge

Moodle is one of the most popular learning management systems. The goal if this
project is, to steer the content of a Moodle course via Markdown files.

## Set up

1. Configure the following permissions for the service:
   - `core_course_get_contents`: For getting the full course listing with blocks and modules.
   - `core_course_edit_section`: For

## Contribute

There is a preconfigured development environment, which contains a Moodle
installation and a catch all SMTP server for testing.

1. **Fork and/or clone** the project to your development device.
1. **Open** your local copy of the project with Visual Studio Code and
   [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).
1. **Develop** the project with
   `deno task dev --configPath=examples/simple/course.moodle.json`.
1. **Test** the project with `deno test`.
1. **Format** the files with `deno fmt`.
1. **Return** your changes with a pull request to the project.

The auxiliary services for development can be accessed as follows:

- **Moodle** can be accessed via http://localhost:8080
  - Credentials for the admin account are openscript (username) and openscript
    (password).
- **Mailbox** can be accessed via http://localhost:8081
