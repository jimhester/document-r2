import * as core from '@actions/core';
import * as github from '@actions/github';

async function run() {

  const token = core.getInput('github-token');

  const octokit = new github.GitHub(token);

  const lastComment = github.context.payload.comment;

  const regex = core.getInput('filter-regex');

  if (!(lastComment && lastComment.body.match(regex))) {
    core.setFailed(`No comment matched`);
  }
}

run();
