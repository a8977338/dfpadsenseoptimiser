---
layout: "book"
title: "Optimizing Google AdSense"
permalink: "/book/"
---
## Optimizing Google AdSense

{% for post in site.posts reversed %}
### {{ post.title }}

{{ post.category }}

{{ post.abstract }}

[read more](/dfpadsenseoptimiser{{ post.url }} "{{ post.title }}")

{% endfor %}

..
