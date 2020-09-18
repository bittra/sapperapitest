<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Sapper api test on IPFS</h1>

<button on:click={testApi}>test api</button>
{#if testApiRes}
<span>{testApiRes.name} {testApiRes.age}</span>
{/if}
<hr>

<input type="text" bind:value={testReqParam}>
<button on:click={()=> testReq(testReqParam)}>test req api</button>
{#if testReqRes}
<span>{testReqRes.name} {testReqRes.age}</span>
{/if}
<hr>

<input type="text" bind:value={testPostParamName}>
<input type="number" bind:value={testPostParamAge}>
<button on:click={testPost}>test POST api</button>
{#if testPostRes}
<span>{testPostRes.name} {testPostRes.age}</span>
{/if}
<hr>

<script>
	import axios from 'axios';

	let testApiRes, testReqRes, testReqParam, testPostParamName, testPostParamAge, testPostRes;

	function testApi() {
		
		axios.get('/api/test')
		.then(function (response) {
			// handle success
			console.log(response);
			testApiRes = response.data;
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		})
		.then(function () {
			// always executed
			console.log('always..');
		});
	}

	function testReq(param) {

		axios.get(`/api/testReq?name=${param}`)
		.then(function (response) {
			// handle success
			console.log(response);
			testReqRes = response.data;
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		})
		.then(function () {
			// always executed
			console.log('always..');
		});
	}

	function testPost() {

		axios.get('/api/testPost', {
			params: {
				name: testPostParamName,
				age: testPostParamAge
			}
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
	}
</script>